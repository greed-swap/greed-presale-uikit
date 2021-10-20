import React from "react";
import styled from "styled-components";
import JagoSaferAudit from "./icons/JagoSaferAudit";

interface AuditProps {
  auditLink: string;
}

const StyledAudit = styled.div`
  margin-bottom: 5px;
  text-align: center;

  svg {
    width: 100%;
  }
`;

const JagoSaferAuditButton: React.FC<AuditProps> = ({ auditLink }) => {
  return (
    <StyledAudit>
      <a href={auditLink} aria-label="AuditLink" target="_blank">
        <JagoSaferAudit />
      </a>
    </StyledAudit>
    )
};

export default JagoSaferAuditButton;
