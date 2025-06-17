 export const formatRelativeDate = (createdAt) => {
  const createdDate = new Date(createdAt);
  const today = new Date();
  const diffTime = Math.abs(today - createdDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // convert ms to days

  if (diffDays <= 7) {
    return `${diffDays === 0 ? "Today" : `${diffDays} day${diffDays > 1 ? "s" : ""} ago`}`;
  }

  // Fallback to default formatting
  return formatDate(createdAt);
};
export const formatDate = (dateString) => {
    if (!dateString) return 'Unknown Date';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

