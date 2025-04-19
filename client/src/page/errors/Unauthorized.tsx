const Unauthorized = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100 text-center text-red-600">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Unauthorized Access</h1>
        <p className="text-lg">
          You do not have permission to access this page. Please log in or
          contact an administrator.
        </p>
      </div>
    </div>
  );
};

export default Unauthorized;
