import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { isNight } from '../../utils/common';
import Select from 'react-select';
import axios from 'axios';
import Loading from '../Loading/Loading';

function Form() {
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      border: '0px solid transparent',
      borderRadius: '4px',
      width: '100%',
      fontFamily: '"Poppins", sans-serif',
      fontSize: '16px',
      fontWeight: '400',
      color: '#a7a7a7',
    }),
    control: (provided, state) => ({
      ...provided,
      border: '0px solid #ccc',
      borderRadius: '10px',
      width: '100%',
      boxShadow: 'none',
      background: `${isNight() ? '#353535' : '#fff'}`,
    }),
    option: (provided, state) => ({
      ...provided,
      color: isNight() ? '#fff' : '#333',
      backgroundColor: state.isFocused && isNight() ? '#555' : 'transparent',
      '&:hover': {
        backgroundColor: isNight() ? '#777' : '#f0f0f0',
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: isNight() ? '#fff' : '#000',
      height: '20px',
    }),
    menu: (provided, state) => ({
      ...provided,
      marginTop: '20px',
      zIndex: 100,
      width: '100%',
      background: isNight() ? '#353535' : '#fff',
    }),
  };

  const [values, setValues] = useState({
    username: '',
    contact_method: '',
    contact_link: '',
    app: '',
    text: '',
  });

  const [selectKey, setSelectKey] = useState(Date.now());

  const contactOptions = [
    { value: 'Telegram', label: 'Telegram' },
    { value: 'Viber', label: 'Viber' },
    { value: 'Email', label: 'Email' },
    { value: 'Number', label: 'Phone number' },
    { value: 'Instagram', label: 'Instagram' },
  ];

  const appOptions = [
    { value: 'Landing', label: 'Landing' },
    { value: 'Blog', label: 'Blog' },
    { value: 'Online_store', label: 'Online store' },
    { value: 'Corporate_website', label: 'Corporate website' },
    { value: 'Portfolio', label: 'Portfolio' },
    { value: 'Other', label: 'Other' },
  ];

  useEffect(() => {
    setSelectKey(Date.now());
  }, [values.contact_method]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    const botToken = process.env.REACT_APP_TOKEN_BOT;
    const chatId = process.env.REACT_APP_CHATID; // Идентификатор чата, куда будет отправлено сообщение
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    try {
      if (!values.username && !values.contact_link && !values.contact_method) {
        setLoading(false);
      } else {
        setLoading(true);
        await axios.post(apiUrl, {
          chat_id: chatId,
          text: `*New request from your site:*\n\n*Sender:* ${
            values.username
          }\n*Contact metod:* ${values.contact_method}\n*Contact link:* ${
            values.contact_link
          }\n${values.app ? `*App:* ${values.app}\n` : ''}${
            values.text ? `*Text:* ${values.text}` : ''
          }`,
          parse_mode: 'Markdown', // Указываем формат Markdown
        });
      }
      setLoading(false);

      setValues((prevValues) => ({
        ...prevValues,
        username: '',
        contact_method: '',
        contact_link: '',
        app: '',
        text: '',
      }));
      setSuccess(true);
      setTimeout(() => {
        setSuccess();
      }, 5000);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSuccess(false);
      setTimeout(() => {
        setSuccess();
      }, 5000);
    }
  }

  return (
    <div className={`${style.form_content} ${isNight() ? style.dark : ''}`}>
      <div
        className={style.text}>
        <h2 className={style.title}>Do you want to contact me?</h2>
        <p className={style.sub_title}>Leave a request and I will answer you</p>
      </div>
      <Loading loading={loading} />
      <div className={`${style.module_window} ${success ? style.open : ''}`}>
        Your application has been successfully sent!
      </div>
      <div
        className={`${style.module_window} ${
          success === false ? style.open : ''
        }`}>
        Error when submitting an application.
      </div>

      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.input_container}>
          <label className={style.input_label}>Name:</label>
          <div className={style.input_block}>
            <span className={style.input_icon}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.1409 15C17.9034 15 20.1409 12.7625 20.1409 10C20.1409 7.2375 17.9034 5 15.1409 5C12.3784 5 10.1409 7.2375 10.1409 10C10.1409 12.7625 12.3784 15 15.1409 15ZM15.1409 17.5C11.8034 17.5 5.14087 19.175 5.14087 22.5V25H25.1409V22.5C25.1409 19.175 18.4784 17.5 15.1409 17.5Z"
                  fill="#A7A7A7"
                />
              </svg>
            </span>
            <input
              className={style.input}
              placeholder="How can I call you?"
              type="text"
              name="username"
              autoComplete="off"
              value={values.username}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div style={{ zIndex: 2 }} className={style.input_container}>
          <label className={style.input_label}>Choose a contact method:</label>
          <div className={style.input_block}>
            <span className={style.input_icon}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.66663 15.8333V9.16663H4.16663C3.50358 9.16663 2.8677 9.43002 2.39886 9.89886C1.93002 10.3677 1.66663 11.0036 1.66663 11.6666V26.6666C1.66787 26.8214 1.71218 26.9728 1.79461 27.1037C1.87703 27.2347 1.99431 27.3402 2.13329 27.4083C2.26719 27.4692 2.41482 27.4935 2.56119 27.4789C2.70755 27.4643 2.84744 27.4112 2.96663 27.325L7.25829 24.1666H18.4583C18.7741 24.176 19.0885 24.1204 19.382 24.0032C19.6755 23.8861 19.9418 23.71 20.1644 23.4858C20.3871 23.2616 20.5613 22.9941 20.6764 22.6998C20.7914 22.4055 20.8448 22.0907 20.8333 21.775V20.8333H11.6666C10.3405 20.8333 9.06877 20.3065 8.13109 19.3688C7.19341 18.4311 6.66663 17.1594 6.66663 15.8333Z"
                  fill="#A7A7A7"
                />
                <path
                  d="M25.8333 3.33337H11.6666C11.0036 3.33337 10.3677 3.59677 9.89886 4.06561C9.43002 4.53445 9.16663 5.17033 9.16663 5.83337V15.8334C9.16663 16.4964 9.43002 17.1323 9.89886 17.6011C10.3677 18.07 11.0036 18.3334 11.6666 18.3334H22.9583L26.9416 21.425C27.06 21.5126 27.1995 21.5672 27.3459 21.5833C27.4923 21.5994 27.6403 21.5764 27.775 21.5167C27.9168 21.4492 28.0366 21.3429 28.1206 21.2102C28.2047 21.0775 28.2495 20.9238 28.25 20.7667V5.83337C28.2503 5.18452 27.9984 4.56095 27.5474 4.09443C27.0965 3.62791 26.4818 3.355 25.8333 3.33337Z"
                  fill="#A7A7A7"
                />
              </svg>
            </span>
            <Select
             key={`1_${selectKey}`}
              styles={customStyles}
              isClearable={true}
              isSearchable={false}
              name="contact_method"
              value={contactOptions.find(
                (option) => option.value === values.contact_method
              )}
              onChange={(selectedOption) =>
                handleChange({
                  target: {
                    name: 'contact_method',
                    value: selectedOption?.value,
                  },
                })
              }
              options={contactOptions}
            />
          </div>
        </div>
        <div className={style.input_container}>
          <label className={style.input_label}>
            Enter your{' '}
            {values.contact_method ? values.contact_method : 'contact method'}:
          </label>
          <div className={style.input_block}>
            <span className={style.input_icon}>
              <svg
                style={
                  values.contact_method === 'Email'
                    ? { display: 'block' }
                    : { display: 'none' }
                }
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 27.5C13.2917 27.5 11.6771 27.1717 10.1563 26.515C8.63542 25.8583 7.30708 24.9625 6.17125 23.8275C5.03625 22.6925 4.14042 21.3646 3.48375 19.8438C2.82708 18.3229 2.49917 16.7083 2.5 15C2.5 13.2708 2.82834 11.6508 3.485 10.14C4.14167 8.62917 5.0375 7.30667 6.1725 6.1725C7.3075 5.03667 8.635 4.14083 10.155 3.485C11.675 2.82917 13.29 2.50083 15 2.5C16.7292 2.5 18.3492 2.82833 19.86 3.485C21.3708 4.14167 22.6933 5.0375 23.8275 6.1725C24.9633 7.3075 25.8592 8.63042 26.515 10.1412C27.1708 11.6521 27.4992 13.2717 27.5 15V16.8125C27.5 18.0417 27.0783 19.0888 26.235 19.9538C25.3917 20.8188 24.355 21.2508 23.125 21.25C22.375 21.25 21.6771 21.0833 21.0313 20.75C20.3854 20.4167 19.8542 19.9792 19.4375 19.4375C18.875 20 18.2133 20.4429 17.4525 20.7663C16.6917 21.0896 15.8742 21.2508 15 21.25C13.2708 21.25 11.7967 20.6404 10.5775 19.4212C9.35834 18.2021 8.74917 16.7283 8.75 15C8.75 13.2708 9.35959 11.7967 10.5788 10.5775C11.7979 9.35833 13.2717 8.74917 15 8.75C16.7292 8.75 18.2033 9.35958 19.4225 10.5788C20.6417 11.7979 21.2508 13.2717 21.25 15V16.8125C21.25 17.4167 21.4375 17.8904 21.8125 18.2337C22.1875 18.5771 22.625 18.7492 23.125 18.75C23.625 18.75 24.0625 18.5779 24.4375 18.2337C24.8125 17.8896 25 17.4158 25 16.8125V15C25 12.2708 24.0154 9.92167 22.0462 7.9525C20.0771 5.98333 17.7283 4.99917 15 5C12.2708 5 9.92167 5.98458 7.9525 7.95375C5.98334 9.92292 4.99917 12.2717 5 15C5 17.7292 5.98459 20.0783 7.95375 22.0475C9.92292 24.0167 12.2717 25.0008 15 25H20C20.3542 25 20.6513 25.12 20.8913 25.36C21.1313 25.6 21.2508 25.8967 21.25 26.25C21.25 26.6042 21.13 26.9012 20.89 27.1412C20.65 27.3812 20.3533 27.5008 20 27.5H15ZM15 18.75C16.0417 18.75 16.9271 18.3854 17.6563 17.6562C18.3854 16.9271 18.75 16.0417 18.75 15C18.75 13.9583 18.3854 13.0729 17.6563 12.3438C16.9271 11.6146 16.0417 11.25 15 11.25C13.9583 11.25 13.0729 11.6146 12.3438 12.3438C11.6146 13.0729 11.25 13.9583 11.25 15C11.25 16.0417 11.6146 16.9271 12.3438 17.6562C13.0729 18.3854 13.9583 18.75 15 18.75Z"
                  fill="#A7A7A7"
                />
              </svg>
              <svg
                style={
                  values.contact_method === 'Telegram'
                    ? { display: 'block' }
                    : { display: 'none' }
                }
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM20.8 11C20.6125 12.975 19.8 17.775 19.3875 19.9875C19.2125 20.925 18.8625 21.2375 18.5375 21.275C17.8125 21.3375 17.2625 20.8 16.5625 20.3375C15.4625 19.6125 14.8375 19.1625 13.775 18.4625C12.5375 17.65 13.3375 17.2 14.05 16.475C14.2375 16.2875 17.4375 13.375 17.5 13.1125C17.5087 13.0727 17.5075 13.0315 17.4966 12.9923C17.4857 12.953 17.4654 12.9171 17.4375 12.8875C17.3625 12.825 17.2625 12.85 17.175 12.8625C17.0625 12.8875 15.3125 14.05 11.9 16.35C11.4 16.6875 10.95 16.8625 10.55 16.85C10.1 16.8375 9.25 16.6 8.6125 16.3875C7.825 16.1375 7.2125 16 7.2625 15.5625C7.2875 15.3375 7.6 15.1125 8.1875 14.875C11.8375 13.2875 14.2625 12.2375 15.475 11.7375C18.95 10.2875 19.6625 10.0375 20.1375 10.0375C20.2375 10.0375 20.475 10.0625 20.625 10.1875C20.75 10.2875 20.7875 10.425 20.8 10.525C20.7875 10.6 20.8125 10.825 20.8 11Z"
                  fill="#A7A7A7"
                />
              </svg>
              <svg
                style={
                  values.contact_method === 'Viber'
                    ? { display: 'block' }
                    : { display: 'none' }
                }
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.95624 7.7525C9.72393 7.71869 9.48704 7.76545 9.28499 7.885H9.26749C8.79874 8.16 8.37624 8.50625 8.01624 8.91375C7.71624 9.26 7.55374 9.61 7.51124 9.9475C7.48624 10.1475 7.50374 10.35 7.56249 10.5412L7.58499 10.5537C7.92249 11.545 8.36249 12.4988 8.89999 13.3963C9.59306 14.6569 10.4459 15.8227 11.4375 16.865L11.4675 16.9075L11.515 16.9425L11.5437 16.9763L11.5787 17.0062C12.6247 18.0008 13.7933 18.8577 15.0562 19.5563C16.5 20.3425 17.3762 20.7137 17.9025 20.8687V20.8763C18.0562 20.9238 18.1962 20.945 18.3375 20.945C18.7857 20.9119 19.2099 20.7297 19.5425 20.4275C19.9487 20.0675 20.2925 19.6438 20.56 19.1725V19.1638C20.8112 18.6888 20.7262 18.2413 20.3637 17.9375C19.6356 17.3013 18.8483 16.7362 18.0125 16.25C17.4525 15.9462 16.8837 16.13 16.6537 16.4375L16.1625 17.0575C15.91 17.365 15.4525 17.3225 15.4525 17.3225L15.44 17.33C12.0262 16.4588 11.115 13.0025 11.115 13.0025C11.115 13.0025 11.0725 12.5325 11.3887 12.2925L12.0037 11.7975C12.2987 11.5575 12.5037 10.99 12.1875 10.43C11.7045 9.59345 11.1405 8.80634 10.5037 8.08C10.3649 7.90906 10.1701 7.79263 9.95374 7.75125L9.95624 7.7525ZM15.725 6.25C15.5592 6.25 15.4003 6.31585 15.2831 6.43306C15.1658 6.55027 15.1 6.70924 15.1 6.875C15.1 7.04076 15.1658 7.19973 15.2831 7.31694C15.4003 7.43415 15.5592 7.5 15.725 7.5C17.305 7.5 18.6175 8.01625 19.6562 9.00625C20.19 9.5475 20.6062 10.1888 20.8787 10.8913C21.1525 11.595 21.2775 12.3463 21.245 13.0988C21.238 13.2645 21.2972 13.4262 21.4095 13.5484C21.5218 13.6705 21.678 13.743 21.8437 13.75C22.0095 13.757 22.1712 13.6978 22.2934 13.5855C22.4155 13.4732 22.488 13.317 22.495 13.1512C22.5338 12.2256 22.3801 11.302 22.0437 10.4387C21.7059 9.57142 21.1937 8.78265 20.5387 8.12125L20.5262 8.10875C19.2375 6.8775 17.6075 6.25 15.725 6.25Z"
                  fill="#A7A7A7"
                />
                <path
                  d="M15.6813 8.30496C15.5155 8.30496 15.3565 8.37081 15.2393 8.48802C15.1221 8.60523 15.0563 8.7642 15.0563 8.92996C15.0563 9.09572 15.1221 9.25469 15.2393 9.3719C15.3565 9.48911 15.5155 9.55496 15.6813 9.55496H15.7025C16.8425 9.63621 17.6725 10.0162 18.2538 10.64C18.85 11.2825 19.1588 12.0812 19.135 13.0687C19.1312 13.2345 19.1934 13.395 19.3079 13.5149C19.4224 13.6348 19.5799 13.7043 19.7456 13.7081C19.9114 13.7119 20.0719 13.6497 20.1918 13.5352C20.3117 13.4207 20.3812 13.2632 20.385 13.0975C20.415 11.8012 19.9975 10.6825 19.17 9.78996V9.78746C18.3238 8.87996 17.1625 8.39996 15.765 8.30621L15.7438 8.30371L15.6813 8.30496Z"
                  fill="#A7A7A7"
                />
                <path
                  d="M15.6575 10.3988C15.5738 10.3914 15.4896 10.4009 15.4097 10.4269C15.3298 10.4528 15.256 10.4945 15.1926 10.5496C15.1292 10.6047 15.0776 10.6719 15.0408 10.7474C15.004 10.8229 14.9828 10.905 14.9784 10.9888C14.974 11.0727 14.9866 11.1566 15.0154 11.2355C15.0441 11.3143 15.0885 11.3866 15.1458 11.448C15.2031 11.5094 15.2722 11.5585 15.3489 11.5926C15.4257 11.6267 15.5085 11.6449 15.5925 11.6463C16.115 11.6738 16.4487 11.8313 16.6587 12.0425C16.87 12.255 17.0275 12.5963 17.0562 13.13C17.0578 13.2139 17.0762 13.2966 17.1104 13.3732C17.1446 13.4498 17.1939 13.5187 17.2553 13.5759C17.3167 13.6331 17.389 13.6773 17.4678 13.7059C17.5467 13.7345 17.6305 13.747 17.7143 13.7425C17.798 13.7381 17.88 13.7168 17.9554 13.68C18.0308 13.6432 18.098 13.5916 18.153 13.5282C18.208 13.4649 18.2497 13.3911 18.2756 13.3113C18.3015 13.2315 18.3111 13.1473 18.3037 13.0638C18.2637 12.3138 18.0287 11.6513 17.5475 11.1638C17.0637 10.6763 16.405 10.4388 15.6575 10.3988Z"
                  fill="#A7A7A7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.83376 2.97995C12.8113 2.09083 16.9362 2.09083 20.9138 2.97995L21.3375 3.0737C22.5003 3.33364 23.5682 3.91086 24.4226 4.74123C25.277 5.5716 25.8845 6.6226 26.1775 7.77745C27.1871 11.7561 27.1871 15.9238 26.1775 19.9025C25.8845 21.0573 25.277 22.1083 24.4226 22.9387C23.5682 23.769 22.5003 24.3463 21.3375 24.6062L20.9125 24.6999C18.4213 25.2571 15.865 25.467 13.3163 25.3237L10 28.2912C9.87498 28.4031 9.7222 28.4795 9.55762 28.5122C9.39303 28.545 9.22267 28.5329 9.06431 28.4774C8.90596 28.4218 8.76542 28.3248 8.65737 28.1964C8.54931 28.068 8.4777 27.913 8.45001 27.7474L7.90126 24.4699C6.84898 24.1425 5.89827 23.5507 5.13997 22.7511C4.38167 21.9514 3.84113 20.9706 3.57001 19.9025C2.56032 15.9238 2.56032 11.7561 3.57001 7.77745C3.86303 6.6226 4.4705 5.5716 5.32492 4.74123C6.17935 3.91086 7.24726 3.33364 8.41001 3.0737L8.83376 2.97995ZM20.505 4.8087C16.7966 3.97971 12.9509 3.97971 9.24251 4.8087L8.81751 4.9037C7.99341 5.08827 7.23659 5.49765 6.6311 6.08636C6.02561 6.67508 5.59514 7.42011 5.38751 8.2387C4.45465 11.9146 4.45465 15.7653 5.38751 19.4412C5.59524 20.26 6.0259 21.0051 6.63162 21.5938C7.23735 22.1826 7.99443 22.5918 8.81876 22.7762L8.93126 22.8012C9.11325 22.8419 9.27897 22.936 9.40722 23.0713C9.53548 23.2067 9.62044 23.3773 9.65126 23.5612L10.0188 25.7587L12.3588 23.6649C12.4522 23.5811 12.5615 23.5169 12.6803 23.4761C12.799 23.4353 12.9248 23.4187 13.05 23.4275C15.5488 23.6047 18.0602 23.4173 20.505 22.8712L20.9288 22.7762C21.7531 22.5918 22.5102 22.1826 23.1159 21.5938C23.7216 21.0051 24.1523 20.26 24.36 19.4412C25.2925 15.7662 25.2925 11.915 24.36 8.2387C24.1523 7.41995 23.7216 6.67482 23.1159 6.08608C22.5102 5.49735 21.7531 5.08806 20.9288 4.9037L20.505 4.8087Z"
                  fill="#A7A7A7"
                />
              </svg>
              <svg
                style={
                  values.contact_method === 'Number'
                    ? { display: 'block' }
                    : { display: 'none' }
                }
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.275 13.4875C10.075 17.025 12.975 19.9125 16.5125 21.725L19.2625 18.975C19.6 18.6375 20.1 18.525 20.5375 18.675C21.9375 19.1375 23.45 19.3875 25 19.3875C25.6875 19.3875 26.25 19.95 26.25 20.6375V25C26.25 25.6875 25.6875 26.25 25 26.25C13.2625 26.25 3.75 16.7375 3.75 5C3.75 4.3125 4.3125 3.75 5 3.75H9.375C10.0625 3.75 10.625 4.3125 10.625 5C10.625 6.5625 10.875 8.0625 11.3375 9.4625C11.475 9.9 11.375 10.3875 11.025 10.7375L8.275 13.4875Z"
                  fill="#A7A7A7"
                />
              </svg>
              <svg
                style={
                  values.contact_method === 'Instagram'
                    ? { display: 'block' }
                    : { display: 'none' }
                }
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.75 2.5H20.25C24.25 2.5 27.5 5.75 27.5 9.75V20.25C27.5 22.1728 26.7362 24.0169 25.3765 25.3765C24.0169 26.7362 22.1728 27.5 20.25 27.5H9.75C5.75 27.5 2.5 24.25 2.5 20.25V9.75C2.5 7.82718 3.26384 5.98311 4.62348 4.62348C5.98311 3.26384 7.82718 2.5 9.75 2.5ZM9.5 5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5V20.5C5 22.9875 7.0125 25 9.5 25H20.5C21.6935 25 22.8381 24.5259 23.682 23.682C24.5259 22.8381 25 21.6935 25 20.5V9.5C25 7.0125 22.9875 5 20.5 5H9.5ZM21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z"
                  fill="#A7A7A7"
                />
              </svg>
              <svg
                style={
                  values.contact_method === '' ||
                  values.contact_method === undefined
                    ? { display: 'block' }
                    : { display: 'none' }
                }
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.75 21.25C7.02083 21.25 5.54667 20.6404 4.3275 19.4213C3.10833 18.2021 2.49917 16.7283 2.5 15C2.5 13.2708 3.10958 11.7967 4.32875 10.5775C5.54792 9.35834 7.02167 8.74917 8.75 8.75H12.5C12.8542 8.75 13.1513 8.87 13.3913 9.11C13.6313 9.35 13.7508 9.64667 13.75 10C13.75 10.3542 13.63 10.6513 13.39 10.8913C13.15 11.1313 12.8533 11.2508 12.5 11.25H8.75C7.70833 11.25 6.82292 11.6146 6.09375 12.3438C5.36458 13.0729 5 13.9583 5 15C5 16.0417 5.36458 16.9271 6.09375 17.6563C6.82292 18.3854 7.70833 18.75 8.75 18.75H12.5C12.8542 18.75 13.1513 18.87 13.3913 19.11C13.6313 19.35 13.7508 19.6467 13.75 20C13.75 20.3542 13.63 20.6513 13.39 20.8913C13.15 21.1313 12.8533 21.2508 12.5 21.25H8.75ZM11.25 16.25C10.8958 16.25 10.5988 16.13 10.3588 15.89C10.1188 15.65 9.99917 15.3533 10 15C10 14.6458 10.12 14.3488 10.36 14.1088C10.6 13.8688 10.8967 13.7492 11.25 13.75H18.75C19.1042 13.75 19.4013 13.87 19.6413 14.11C19.8813 14.35 20.0008 14.6467 20 15C20 15.3542 19.88 15.6513 19.64 15.8913C19.4 16.1313 19.1033 16.2508 18.75 16.25H11.25ZM17.5 21.25C17.1458 21.25 16.8488 21.13 16.6088 20.89C16.3688 20.65 16.2492 20.3533 16.25 20C16.25 19.6458 16.37 19.3488 16.61 19.1088C16.85 18.8688 17.1467 18.7492 17.5 18.75H21.25C22.2917 18.75 23.1771 18.3854 23.9062 17.6563C24.6354 16.9271 25 16.0417 25 15C25 13.9583 24.6354 13.0729 23.9062 12.3438C23.1771 11.6146 22.2917 11.25 21.25 11.25H17.5C17.1458 11.25 16.8488 11.13 16.6088 10.89C16.3688 10.65 16.2492 10.3533 16.25 10C16.25 9.64584 16.37 9.34875 16.61 9.10875C16.85 8.86875 17.1467 8.74917 17.5 8.75H21.25C22.9792 8.75 24.4533 9.35959 25.6725 10.5788C26.8917 11.7979 27.5008 13.2717 27.5 15C27.5 16.7292 26.8904 18.2033 25.6713 19.4225C24.4521 20.6417 22.9783 21.2508 21.25 21.25H17.5Z"
                  fill="#A7A7A7"
                />
              </svg>
            </span>
            <input
              className={style.input}
              placeholder={
                values.contact_method ? values.contact_method : 'Contact method'
              }
              type="text"
              name="contact_link"
              autoComplete="off"
              value={values.contact_link}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div style={{ zIndex: 1 }} className={style.input_container}>
          <label className={style.input_label}>
            What web application do you need?
          </label>
          <div className={style.input_block}>
            <span className={style.input_icon}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <mask
                  id="mask0_143_291"
                  style={{ maskType: 'luminance' }}
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="3"
                  width="24"
                  height="24">
                  <path
                    d="M11.25 3.75H5C4.66848 3.75 4.35054 3.8817 4.11612 4.11612C3.8817 4.35054 3.75 4.66848 3.75 5V11.25C3.75 11.5815 3.8817 11.8995 4.11612 12.1339C4.35054 12.3683 4.66848 12.5 5 12.5H11.25C11.5815 12.5 11.8995 12.3683 12.1339 12.1339C12.3683 11.8995 12.5 11.5815 12.5 11.25V5C12.5 4.66848 12.3683 4.35054 12.1339 4.11612C11.8995 3.8817 11.5815 3.75 11.25 3.75ZM11.25 17.5H5C4.66848 17.5 4.35054 17.6317 4.11612 17.8661C3.8817 18.1005 3.75 18.4185 3.75 18.75V25C3.75 25.3315 3.8817 25.6495 4.11612 25.8839C4.35054 26.1183 4.66848 26.25 5 26.25H11.25C11.5815 26.25 11.8995 26.1183 12.1339 25.8839C12.3683 25.6495 12.5 25.3315 12.5 25V18.75C12.5 18.4185 12.3683 18.1005 12.1339 17.8661C11.8995 17.6317 11.5815 17.5 11.25 17.5ZM25 3.75H18.75C18.4185 3.75 18.1005 3.8817 17.8661 4.11612C17.6317 4.35054 17.5 4.66848 17.5 5V11.25C17.5 11.5815 17.6317 11.8995 17.8661 12.1339C18.1005 12.3683 18.4185 12.5 18.75 12.5H25C25.3315 12.5 25.6495 12.3683 25.8839 12.1339C26.1183 11.8995 26.25 11.5815 26.25 11.25V5C26.25 4.66848 26.1183 4.35054 25.8839 4.11612C25.6495 3.8817 25.3315 3.75 25 3.75ZM25 17.5H18.75C18.4185 17.5 18.1005 17.6317 17.8661 17.8661C17.6317 18.1005 17.5 18.4185 17.5 18.75V25C17.5 25.3315 17.6317 25.6495 17.8661 25.8839C18.1005 26.1183 18.4185 26.25 18.75 26.25H25C25.3315 26.25 25.6495 26.1183 25.8839 25.8839C26.1183 25.6495 26.25 25.3315 26.25 25V18.75C26.25 18.4185 26.1183 18.1005 25.8839 17.8661C25.6495 17.6317 25.3315 17.5 25 17.5Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_143_291)">
                  <path d="M0 0H30V30H0V0Z" fill="#A7A7A7" />
                </g>
              </svg>
            </span>
            <Select
            key={`2_${selectKey}`}
              styles={customStyles}
              isClearable={true}
              isSearchable={false}
              name="app"
              value={appOptions.find((option) => option.value === values.app)}
              onChange={(selectedOption) =>
                handleChange({
                  target: {
                    name: 'app',
                    value: selectedOption?.value,
                  },
                })
              }
              options={appOptions}
            />
          </div>
        </div>
        <div className={style.input_container}>
          <label className={style.input_label}>Additional offers:</label>
          <div
            style={{ alignItems: 'flex-start' }}
            className={style.input_block}>
            <span className={style.input_icon}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 2.5C12.6794 2.5 10.4538 3.42187 8.81282 5.06282C7.17187 6.70376 6.25 8.92936 6.25 11.25C6.25 14.225 7.7375 16.8375 10 18.425V21.25C10 21.5815 10.1317 21.8995 10.3661 22.1339C10.6005 22.3683 10.9185 22.5 11.25 22.5H18.75C19.0815 22.5 19.3995 22.3683 19.6339 22.1339C19.8683 21.8995 20 21.5815 20 21.25V18.425C22.2625 16.8375 23.75 14.225 23.75 11.25C23.75 8.92936 22.8281 6.70376 21.1872 5.06282C19.5462 3.42187 17.3206 2.5 15 2.5ZM11.25 26.25C11.25 26.5815 11.3817 26.8995 11.6161 27.1339C11.8505 27.3683 12.1685 27.5 12.5 27.5H17.5C17.8315 27.5 18.1495 27.3683 18.3839 27.1339C18.6183 26.8995 18.75 26.5815 18.75 26.25V25H11.25V26.25Z"
                  fill="#A7A7A7"
                />
              </svg>
            </span>
            <textarea
              className={style.input}
              placeholder="Your text"
              type="textarea"
              name="text"
              autoComplete="off"
              value={values.text}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className={style.form_btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
