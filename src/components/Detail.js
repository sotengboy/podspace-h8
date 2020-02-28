import { Suspense, lazy } from 'react';
import { Link, useParams } from "react-router-dom";
/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import loaderimg from '../images/load.gif';

const Episodes = lazy(() => import('./Episodes'));

function Detail(props) {
    const podcasts = props.podcasts;
    const { id } = useParams();
    var podcast = podcastById(id);
    function podcastById(id) {
        const podcast = podcasts.find(x => x.id === parseInt(id));
        return podcast;
    }
    return (

            <div css={css`
            border: 1px solid #650d88;
            margin: 10px;
            height: 450px;
            `}>
            
                <div >
                    <Suspense fallback={<div><img src={loaderimg} alt="Loading" /></div>}>
                        <img src={podcast.thumbnail} alt={podcast.title} css={styles.thumbnail} />
                    </Suspense>
                </div>
                <div>
                    <h3>{podcast.title}</h3>
                    <p>{podcast.url}</p>
                    Episodes:
                        {podcast.episodes ? (
                            <Suspense fallback={<div><img src={loaderimg} alt="Loading" /></div>}>
                                <Episodes episodes={podcast.episodes} />
                            </Suspense>
                        ) : (
                            <p>Tidak ada episode</p>
                        )}
                    <Link to={"/"} css={css`background: #650d88;color: #fff;padding: 10px;`}>{'<< Kembali'}</Link>
                </div>

            </div> 
    )
}
const styles = {
    thumbnail: css`
        float:left;
        max-width:450px;
        padding-right: 10px;
        width:100%;
    `,
}
export default Detail;