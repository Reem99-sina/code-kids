


const ErrorInputComponent = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <div className=' flex items-start gap-x-1 text-xs text-red-600'>
    
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorInputComponent;
