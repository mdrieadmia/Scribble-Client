import {FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton} from "react-share"
import PropTypes from 'prop-types';

const ShareSocial = ({id, title, blogPhoto}) => {
    return (
        <div className="mt-10 flex gap-5 items-center">
            <h1>Share Now : </h1>
            <div className="flex gap-3">
                <FacebookShareButton
                    url={`https://scribblebd.netlify.app/blog/details/${id}`}
                    title={title}
                    image={blogPhoto}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <LinkedinShareButton
                    url={`https://scribblebd.netlify.app/blog/details/${id}`}
                    title={title}
                    image={blogPhoto}
                >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <TwitterShareButton
                    url={`https://scribblebd.netlify.app/blog/details/${id}`}
                    title={title}
                    image={blogPhoto}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <TelegramShareButton
                    url={`https://scribblebd.netlify.app/blog/details/${id}`}
                    title={title}
                    image={blogPhoto}
                >
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
                <WhatsappShareButton
                    url={`https://scribblebd.netlify.app/blog/details/${id}`}
                    title={title}
                    image={blogPhoto}
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </div>
        </div>
    );
};

ShareSocial.propTypes = {
    id: PropTypes.string,
    blogPhoto: PropTypes.string,
    title: PropTypes.string
};
export default ShareSocial;