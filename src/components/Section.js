import React from 'react';
import { css } from '@emotion/core';
import { FaArrowDown } from "react-icons/fa/";
import Styles from '../styles';



export default (props) => {
    const { children, isLast, id } = props;
    const separatorRef = React.useRef(null);

    function scrollToBottom() {
        separatorRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    return (
        <section
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100vh;
            `}
            id={id}
        >
            { children }
            {!isLast &&
                <>
                    <button
                        css={css`
                            background-color: transparent;
                            margin: 50px;
                            padding: 24px;
                        `}
                        onClick={scrollToBottom}
                    >
                        <FaArrowDown />
                    </button>
                    {/* we have the margin to offset the sticky navbar */}
                    <hr ref={separatorRef} css={css`margin-bottom: ${Styles.heights.navbar};`} />
                </>
            }
        </section>
    )
}