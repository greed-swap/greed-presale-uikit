import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Profile } from "./types";
import RugDocAudit from "./icons/RugDocAudit";

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

const RugDocAuditButton: React.FC<AuditProps> = ({ auditLink }) => {
  return (
    <StyledAudit>
      <a href={auditLink} aria-label="AuditLink" target="_blank">
        <RugDocAudit />
      </a>
    </StyledAudit>
    )
};

export default RugDocAuditButton;
