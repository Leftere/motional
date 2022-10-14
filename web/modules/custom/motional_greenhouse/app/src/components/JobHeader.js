import { useLocation } from "react-router-dom";
import { formatDistance } from "date-fns";
import SVG from "react-inlinesvg";
import Button from "./Button";
import ShareButton from "./ShareButton";

const JobHeader = ({ job }) => {
  const location = useLocation();

  return (
    <div className="job-header">
      <div className="job-header__background">
        <SVG
          className="job-header__background-lines"
          src="/modules/custom/motional_greenhouse/app/build/images/icons/lines.svg"
          title="Background"
        />
        <SVG
          className="job-header__background-lines-mobile"
          src="/modules/custom/motional_greenhouse/app/build/images/icons/lines-mobile.svg"
          title="Background"
        />
      </div>
      <div className="job-header__inner">
        <p className="job-header__label">{job?.departments[0]?.name}</p>
        <h1 className="job-header__title">{job?.title}</h1>

        {!location.pathname.includes("/apply") && (
          <Button className="btn--main" to={"apply"} icon={true}>
            Apply Now
          </Button>
        )}
      </div>
      <div className="job-header__meta">
        <div className="job-header__meta-inner">
          <div className="job-header__meta-wrapper">
            <div className="job-header__locations">
              <SVG
                src="/modules/custom/motional_greenhouse/app/build/images/icons/marker.svg"
                title="Office locations"
              />
              <p>
                {Array.from(job?.offices?.map((office) => office?.name)).join(
                  ", "
                )}
              </p>
            </div>
            <div className="job-header__divider">|</div>
            <div className="job-header__employment-type">
              <SVG
                src="/modules/custom/motional_greenhouse/app/build/images/icons/calendar.svg"
                title="Office locations"
              />
              <p>{job?.metadata[0]?.value}</p>
            </div>
            <div className="job-header__divider">|</div>
            <div className="job-header__updated">
              <SVG
                src="/modules/custom/motional_greenhouse/app/build/images/icons/time.svg"
                title="Office locations"
              />
              <p>
                Updated:{" "}
                {formatDistance(new Date(job?.updated_at), new Date(), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>
          <div className="job-header__share">
            <div className="job-header__share-inner">
              <ShareButton social="facebook" />
              <ShareButton social="twitter" />
              <ShareButton social="linkedin" />
              <ShareButton social="link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobHeader;
