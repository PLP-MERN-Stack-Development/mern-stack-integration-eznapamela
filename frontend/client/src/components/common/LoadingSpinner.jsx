const LoadingSpinner = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className="loading">
      <div className="flex flex-col items-center gap-4">
        <div className={`loading-spinner ${sizeClasses[size]}`}></div>
        {text && <p className="text-gray-600 font-medium">{text}</p>}
      </div>
    </div>
  );
};

export default LoadingSpinner;