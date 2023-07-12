const FormattedDate = () => {
  const now = Date.now();
  const createdAt = new Date(now);
  const formattedDate = createdAt.toDateString();

  return (
    <>
      <div className="date-container">
        <span>{formattedDate}</span>
      </div>
    </>
  );
};

export default FormattedDate;
