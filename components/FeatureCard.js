const FeatureCard = (props) => {
  return (
    <div className="feature-card">
      <p className="feature-icon">{props.icon}</p>
      <div>
        <p className="feature-title">{props.title}</p>
        <div>
          <p>
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
          <p>Build your next landing page.</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
