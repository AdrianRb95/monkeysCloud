// Third libs
import React, { memo, useState, useCallback, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { AiOutlineInfoCircle } from "react-icons/ai";

// Local
import "./style.scss";
import { useIsOut } from "../../utils/customHooks/useIsOut";

function Breadcrumb(props) {
  const [isVisible, setIsVisible] = useState(false);
  const breadcrumbRef = useRef(null);
  // Using custom hook
  useIsOut({ref: breadcrumbRef, callback: setIsVisible});
  
  const [organization, setOrganization] = useState({
    id: -1,
    name: "All organizations",
  });
  const [application, setApplication] = useState({
    id: -1,
    name: "All applications",
  });
  const [environment, setEnvironment] = useState({
    id: -1,
    name: "All environments",
  });

  const organizations = [
    { name: "All organizations", id: -1 },
    { name: "organization one", id: 1 },
    { name: "organization two", id: 2 },
    { name: "organization three", id: 3 },
  ];

  const applications = [
    { name: "All applications", id: -1 },
    { name: "application one", id: 1 },
    { name: "application two", id: 2 },
    { name: "application three", id: 3 },
  ];

  const environments = [
    { name: "All environments", id: -1 },
    { name: "Dev", id: 1 },
    { name: "Stage", id: 2 },
    { name: "Production", id: 3 },
    { name: "Develop2", id: 4 },
    { name: "RA", id: 5 },
  ];

  const handleClick = useCallback(
    (e) => {
      switch (e.currentTarget.dataset.el_name) {
        case "btnBreacrumb":
          setIsVisible((prev) => !prev);
          break;
        case "btnOrganization":
          setOrganization(JSON.parse(e.currentTarget.dataset.el_value));
          break;
        case "btnApplication":
          setApplication(JSON.parse(e.currentTarget.dataset.el_value));
          break;
        case "btnEnvironment":
          setEnvironment(JSON.parse(e.currentTarget.dataset.el_value));
          break;
        default:
          break;
      }
    },
    // eslint-disable-next-line
    []
  );



  return (
    <div
      className="d-flex flex-column user-select-none"
    >
      <div
        className="d-flex align-items-center pointer breadcrumb-button"
        onClick={handleClick}
        data-el_name="btnBreacrumb"
      >
        <div className="breadcrumb-bg" />

        <div className="breadcrumb-text breadcrumb-text-firts ">
          {organization.name}
        </div>
        <span>/</span>
        <div className="breadcrumb-text">{application.name}</div>
        <span>/</span>
        <div className="breadcrumb-text">{environment.name}</div>
      </div>
      {isVisible && (
        <div className="d-flex monkeys-mt-5 position-absolute flex-wrap" ref={breadcrumbRef}>
          {/* ORGANIZATIONS */}
          <div
            className="monkeys-card monkeys-bg-white"
            style={{ zIndex: 2 }}
          >
            <div className="monkeys-card-header d-flex align-items-center">
              <span>Organization</span>
              <div className="monkeys-p-1">
                <AiOutlineInfoCircle className="monkeys-info-icon" />
              </div>
            </div>
            <div className="monkeys-card-body">
              <ul className="monkeys-list">
                {organizations.map((o, i) => (
                  <li
                    onClick={handleClick}
                    data-el_name="btnOrganization"
                    data-el_value={JSON.stringify(o)}
                    className={`monkeys-list-item pointer ${
                      organization.id === o.id && "active"
                    }`}
                    key={i}
                  >
                    {o.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* APPLICATIONS */}
          <div
            className="monkeys-card monkeys-bg-white"
            style={{ zIndex: 2 }}
          >
            <div className="monkeys-card-header d-flex align-items-center">
              <span>Application</span>
              <div className="monkeys-p-1">
                <AiOutlineInfoCircle className="monkeys-info-icon" />
              </div>
            </div>
            <ul className="monkeys-card-body">
              {applications.map((a, j) => (
                <li
                  onClick={handleClick}
                  data-el_name="btnApplication"
                  data-el_value={JSON.stringify(a)}
                  className={`monkeys-list-item pointer ${
                    application.id === a.id && "active"
                  }`}
                  key={j}
                >
                  {a.name}
                </li>
              ))}
            </ul>
          </div>
          {/* ENVIRONMENTS */}
          <div
            className="monkeys-card monkeys-bg-white"
            style={{ zIndex: 2 }}
          >
            <div className="monkeys-card-header d-flex align-items-center">
              <span>Environment</span>
              <div className="monkeys-p-1">
                <AiOutlineInfoCircle className="monkeys-info-icon" />
              </div>
            </div>
            <div className="monkeys-card-body">
              <ul className="monkeys-list">
                {environments.map((e, k) => (
                  <li
                    onClick={handleClick}
                    data-el_name="btnEnvironment"
                    data-el_value={JSON.stringify(e)}
                    className={`monkeys-list-item pointer ${
                      environment.id === e.id && "active"
                    }`}
                    key={k}
                  >
                    {e.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Breadcrumb.propTypes = {
  group: PropTypes.string,
  items: PropTypes.array,
  value: PropTypes.object,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default memo(Breadcrumb);
