function TrendContent(pois) {
  return (
    <div className="author">
      <div className="author">
        {pois.content.name}
        <img src={pois.content.logo.Verified} />
      </div>
      <div className="author-detail">{pois.content.detail}</div>
    </div>
  );
}

export default TrendContent;
