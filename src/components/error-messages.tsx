import { HTMLError } from "@/types";

type ValidationErrorListProps = {
  errors: HTMLError[];
};

function ValidationErrorList({ errors }: ValidationErrorListProps) {
  if (!errors.length) {
    return (
      <div className="text-green-500">No HTML errors found! Good job.</div>
    );
  }

  return (
    <div className="space-y-4 h-full overflow-auto">
      {errors.map((error, index) => (
        <div key={index} className="p-2 bg-white shadow rounded">
          <h3 className="font-bold text-red-600">Error: {error.message}</h3>
          <p className="text-gray-800">
            <strong>Location:</strong> Line {error.lastLine}, Column{" "}
            {error.firstColumn} to {error.lastColumn}
          </p>
          <div className="mt-2">
            <strong>Context:</strong>
            <pre className="bg-gray-200 p-2 rounded">
              {highlightError(error)}
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}

function highlightError(error: HTMLError) {
  const beforeError = error.extract.substring(0, error.hiliteStart);

  const errorPart = error.extract.substring(
    error.hiliteStart,
    error.hiliteStart + error.hiliteLength
  );

  const afterError = error.extract.substring(
    error.hiliteStart + error.hiliteLength
  );

  return (
    <>
      {beforeError}
      <span className="bg-red-300">{errorPart}</span>
      {afterError}
    </>
  );
}

export default ValidationErrorList;
