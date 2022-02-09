const Share = () => {
  return (
    <div className="hidden sm:flex items-center space-x-4 min-w-0">
      <button
        type="button"
        className="relative flex-none rounded-md text-sm font-semibold leading-6 py-1.5 px-3 hover:bg-sky-400 bg-sky-500 text-white shadow-sm dark:shadow-highlight/20"
      >
        <span
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="false"
        >
          Share
        </span>
        <span
          className="absolute inset-0 flex items-center justify-center invisible"
          aria-hidden="true"
        >
          <span className="sr-only">Loading</span>
          <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 animate-spin">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
        <span className="invisible" aria-hidden="true">
          Copied!
        </span>
      </button>
    </div>
  )
}

export default Share