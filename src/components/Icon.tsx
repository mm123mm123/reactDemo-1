import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name?: String
} & React.SVGAttributes<SVGElement>
const Icon = (props: Props) => {
  const {name, children,...rest} = props;
  return (
    <svg {...rest}>
      {name && <use xlinkHref={'#' + name}/>}
    </svg>
  );
};

export default Icon;
