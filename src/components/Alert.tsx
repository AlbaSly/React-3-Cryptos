import { Dispatch, SetStateAction, useEffect, useState } from "react";

import styled from "@emotion/styled";

import { AlertComponentProps } from "../interfaces/component.interface";

const Info = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 4px;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    margin: 10px auto;
`;

const Alert = (props: AlertComponentProps): JSX.Element => {
    const {alertInfoState: {alertInfo, setAlertInfo}} = props;

    useEffect(() => {
        const show = setTimeout(() => {
            setAlertInfo('');
        }, 1000);

        return (): void => clearTimeout(show);
    }, [alertInfo]);

    return (
        <Info className="fade">
            <p>{alertInfo}</p>
        </Info>
    );
}

export default Alert;