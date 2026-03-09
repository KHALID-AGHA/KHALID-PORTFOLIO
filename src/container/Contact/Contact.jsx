
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import AppWrapper from '../../Wrapper/AppWrapper';
import MotionWrap from '../../Wrapper/MotionWrapper';
import { images } from '../../constants';
import './Contact.scss';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({ user_name: '', user_email: '', user_message: '', });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user_name, user_email, user_message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <h2 className="head-text">
                <span> Reach out </span> &amp; <span>let's connect </span>
            </h2>
            <div className="app__contact-cards">

                <a href="mailto:mkhalid.k.agha@gmail.com"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="app__contact-card"
                    aria-label="Email Khalid Agha"
                >
                    <img src={images.emailimg} alt="email Khalid Agha" />
                    <p className="p-text">mkhalid.k.agha@gmail.com</p>
                </a>
                <a href='https://wa.me/+96176318263'
                    target='_blank'
                    rel="noopener noreferrer"
                    className="app__contact-card"
                    aria-label="WhatsApp Lebanon"
                >
                    <img src={images.lebanon} alt="Lebanon phone" />
                    <p className="p-text">+961 76 318 263</p>
                </a>
                <a href='https://wa.me/+963999452015'
                    target='_blank'
                    rel="noopener noreferrer"
                    className="app__contact-card"
                    aria-label="WhatsApp Syria"
                >
                    <img src={images.syria} alt="Syria phone" />
                    <p className="p-text">+963 999 452 015</p>
                </a>

            </div>
            {!isFormSubmitted ? (
                <form
                    onSubmit={handleSubmit}
                    ref={form}
                    className="app__contact-form app__flex"
                >
                    <span >Drop me a message</span>
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="text"
                            required
                            placeholder="Your Name"
                            name="user_name"
                            value={user_name}
                            onChange={handleChangeInput} />
                    </div>
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="email"
                            required
                            placeholder="Your Email"
                            name="user_email"
                            value={user_email}
                            onChange={handleChangeInput} />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            required
                            placeholder="Your Message"
                            value={user_message}
                            name="user_message"
                            rows="4"
                            cols="4"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button aria-label='Send Message' className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button>
                </form>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </>
    );
};

export default AppWrapper(
    MotionWrap(Contact, 'app__contact'),
    'contact',
    'app__whitebg',
);