// @ts-ignore
import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
    return requireContext.keys().forEach(requireContext);
};
try { // @ts-ignore
    importAll(require.context('icons', true, /\.svg$/));}
catch (error) {console.log(error);}

type Props = {
    name: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
    return (
        <svg>
            <use xlinkHref={'#' + props.name}/>
        </svg>
    );
};

export default Icon;