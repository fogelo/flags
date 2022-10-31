import React, {FC} from "react";
import {useParams} from "react-router-dom";

const Details: FC<any> = () => {
    let {name} = useParams();

    return (
        <div>
            Details {name}
        </div>
    );
};

export default Details;
