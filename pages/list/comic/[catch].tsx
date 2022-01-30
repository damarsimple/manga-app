import { WithRouterProps } from 'next/dist/client/with-router';
import { withRouter } from 'next/router';
import React from 'react';

function Catch({ }: WithRouterProps) {
    return <div></div>;
}

export default withRouter(Catch)
