import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface TechRateAuditProps extends SvgProps {
}

const JagoSaferAudit: React.FC<TechRateAuditProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 370 121" {...props}>
      <image width="370" height="121" href='/images/egg/greenflag.svg' />
    </Svg>
  )
};

export default JagoSaferAudit;
