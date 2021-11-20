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
        set_valid_tags(
            tags.filter(tag => sites.includes(site => site.accepts.includes(tag)))
        )
    }, [ tags, sites ]);
    
    return (
        <div>
            {
                valid_tags.map(tag => (
                    <div>
                        <h2>{ tag }</h2>
                        {
                            sites.filter(site => site.tags.includes(tag.toLowerCase()))
                                .map(site => <p><a>{site.name}</a></p>)
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default Results;
