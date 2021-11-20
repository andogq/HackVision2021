import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "fire";

const db = getFirestore(app);

const Results = () => {
    const { state: tags } = useLocation();
    const [ sites, set_sites ] = useState([]);
    const [ valid_tags, set_valid_tags ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function load_sites() {
            let snapshot = await getDocs(collection(db, "sites"));

            set_sites(snapshot.docs.map(doc => doc.data()));
        }

        load_sites();
    }, []);

    useEffect(() => {
        if (!tags) navigate("/camera");
        else {
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
        }
    }, [ tags, sites ]);

    return (
        <div>
            {
                valid_tags.length > 0 ?
                    valid_tags.map(tag => (
                        <div key={tag.name}>
                            <h2>{ tag.name }</h2>
                            {
                                tag.sites.map(site => (
                                    <p
                                        key={site.name}
                                        onClick={() => navigate("/map", { state: site })}
                                    >
                                        {site.name}
                                    </p>
                                ))
                            }
                        </div>
                    )) :
                    <>
                        <h3>No sites were found that accept the following detected materials:</h3>
                        { tags.map(tag => <p key={tag}>{tag}</p>) }
                    </>
            }
        </div>
    );
}

export default Results;
