const ProgressBar = ({ skillName, skillPercentage }) => {
  return (
    <>
      <li>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            data-percent={`${skillPercentage}%`}
            style={{ width: `${skillPercentage}%` }}
          >
            <span className="sr-only">70% Complete</span>
          </div>
          <span className="progress-type">{skillName}</span>
          <span className="progress-completed">{skillPercentage}</span>
        </div>
      </li>
    </>
  );
};

export default ProgressBar;
