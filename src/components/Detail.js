import { Suspense, lazy } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link, useParams } from "react-router-dom";
import loaderimg from '../images/load.gif';
/** @jsx jsx */
import {css, jsx} from "@emotion/core";
const Episodes = lazy(() => import('./Episodes'));

function Detail(props) {
    const podcasts = props.podcasts;
    const { id } = useParams();
    var podcast = podcastById(id);
    console.log(podcasts);
    function podcastById(id) {
        const podcast = podcasts.find(x => x.id === parseInt(id));
        return podcast;
    }
    return (

            <Row css={css`
            border: 1px solid #650d88;
            margin: 10px;
            `}>
            
                <Col lg={4} md={4} sm={12} xs={12} >
                    <Suspense fallback={<div><img src={loaderimg} alt="Loading" /></div>}>
                        <img src={podcast.thumbnail} alt={podcast.title} css={css`width:100%;margin-top:3px;`} />
                    </Suspense>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
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

                </Col>

            </Row> 
    )
}
export default Detail;