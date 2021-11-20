import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "fire";

const db = getFirestore(app);

const Results = () => {
    const { state: tags } = useLocation();
    const [ sites, set_sites ] = useState([]);
    const [ valid_tags, set_valid_tags ] = useState([]);

    useEffect(() => {
        async function load_sites() {
            let snapshot = await getDocs(collection(db, "sites"));

            set_sites(snapshot.docs.map(doc => doc.data()));
        }

        load_sites();
    }, []);

    useEffect(() => {
        // Iterate through each tag
        let materials = tags.filter(tag => {
            // See if any siters include it
            for (let site of sites) {
                if (site.accepts.includes(tag)) return true;
            }
            
            return false;
        });

        set_valid_tags(materials.map(material => ({
            name: material,
            sites: sites.filter(site => site.accepts.includes(material))
        })));
    }, [ tags, sites ]);

    return (
        <div>
            {
                valid_tags.map(tag => (
                    <div>
                        <h2>{ tag.name }</h2>
                        {
                            tag.sites.map(site => (
                                <p><a>{site.name}</a></p>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default Results;
