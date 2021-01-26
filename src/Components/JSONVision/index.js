import React from "react";

function JSONVision({state}) {
    return (
        <code><pre>{JSON.stringify(state, null, 2)}</pre></code>

    )
}

export default JSONVision