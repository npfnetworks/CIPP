import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CCard, CCardBody, CCardHeader, CCardTitle } from '@coreui/react'

export default function CippContentCard({
  title,
  titleType = 'small',
  children,
  icon,
  button,
  bodyClass = null,
  className = null,
}) {
  return (
    <CCard className={`content-card h-100 ${className ?? ''}`}>
      <CCardHeader className="d-flex justify-content-between align-items-center">
        <CCardTitle>
          {titleType === 'big' ? <h3 className="underline mb-3">{title}</h3> : title}
        </CCardTitle>
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
        {button ? button : null}
      </CCardHeader>
      <CCardBody className={bodyClass}>{children}</CCardBody>
    </CCard>
  )
}

CippContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  button: PropTypes.element,
  bodyClass: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
