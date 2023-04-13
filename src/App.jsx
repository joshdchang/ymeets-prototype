import {
  IconPlus,
  IconCopy,
  IconSearch,
  IconUser,
  IconCalendarEvent,
  IconUsers,
  IconClock,
  IconMapPin,
  IconEdit,
  IconInfoCircle,
} from "@tabler/icons-react";

function App() {
  const events = [
    {
      name: "CS 323 Midterm group",
      code: "123456",
      date: "Mon, Oct 18",
      time: "7:00 PM",
      location: "Sterling Memorial Library",
      attendees: 2,
    },
    {
      name: "Quizbowl nats practice",
      code: "694200",
      date: "TBD",
      time: "TBD",
      location: "Linsly-Chittenden Hall",
      attendees: 6,
    },
    {
      name: "Meeting for trolling",
      code: "314159",
      date: "Mon, Oct 21",
      time: "4:00 PM",
      location: "TBD",
      attendees: 3,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="flex justify-between items-center bg-white border-b py-1.5 sm:py-2 md:py-2.5 lg:py-3 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 shadow-sm sticky top-0 w-full">
        <div className="flex gap-3 items-center">
          <h1 className="font-serif font-semibold">
            <span className="text-sky-600 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Y
            </span>
            <span className="text-slate-800 sm:text-lg md:text-xl lg:text-2xl font-medium">
              meets
            </span>
          </h1>
        </div>
        <div className="gap-3 hidden md:flex">
          <p className="hidden lg:flex items-center gap-1.5 text-sm text-center bg-sky-100 text-sky-700 py-1 px-5 rounded-full">
            <i>Ymeets</i> is the best way to schedule meet-ups at Yale
            University
          </p>
          <button className="text-sm flex items-center gap-2 bg-slate-200/70 text-slate-700 py-1 px-5 rounded-full hover:bg-slate-300/70 active:bg-slate-400/70 transition-colors">
            About this project
            <IconInfoCircle className="inline-block w-4 text-slate-600" />
          </button>
        </div>
        <div className="flex gap-2 md:gap-3">
          <p className="text-sm md:text-base text-slate-800 font-medium items-center flex gap-1 md:gap-1.5 lg:gap-2">
            <IconUser className="inline-block w-4 md:w-5" />
            Josh Chang
          </p>
        </div>
      </header>
      <div className="pt-6 sm:pt-9 md:pt-12 lg:pt-16 xl:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 px-5 xs:px-8 md:px-12 lg:px-16 xl:px-20 max-w-8xl flex flex-col gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 flex-grow w-full">
        <div className="flex flex-col sm:flex-row justify-between lg:items-center gap-6 sm:gap-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold font-serif text-slate-700">
            Your events
          </h2>
          <div className="flex flex-col items-start sm:items-stretch sm:flex-row gap-4 sm:gap-4.5 md:gap-5 lg:gap-6 xl:gap-7">
            <div className="flex">
              <input
                type="text"
                placeholder="Enter code"
                className="text-sm lg:text-base outline-none bg-white text-slate-700 border border-slate-300 font-medium py-1 sm:py-1.5 md:py-2 px-3 rounded-l-lg transition-all focus:border-sky-600 focus:ring-4 focus:ring-sky-300/20"
              />
              <button className="bg-slate-500 flex items-center gap-2 text-white font-semibold py-1 sm:py-1.5 md:py-2 px-4 rounded-r-lg hover:bg-slate-600 active:bg-slate-700 transition-colors">
                <IconSearch className="inline-block w-4 md:w-5" />
              </button>
            </div>
            <button className="text-sm lg:text-base flex items-center gap-2 bg-sky-600 text-white font-medium py-1 sm:py-1.5 md:py-2 px-4 md:px-6 rounded-lg hover:bg-sky-700 active:bg-sky-800 transition-colors">
              <IconPlus className="inline-block w-4 md:w-5" />
              Create event
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9">
          {events.map((event) => (
            <div className="bg-white rounded-xl lg:rounded-2xl border shadow-sm grid gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 p-6 sm:p-7 md:p-8 lg:p-9 xl:p-10">
              <div className="flex justify-between items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-5.5 xl:gap-6">
                <h3 className="md:text-lg lg:text-xl font-medium text-slate-800">
                  {event.name}
                </h3>
                <IconEdit className="inline-block w-4 md:w-5 text-slate-400 hover:text-slate-500 cursor-pointer transition-colors active:text-slate-600" />
              </div>
              <div className="grid gap-5 sm:gap-5.5 md:gap-6 lg:gap-7 xl:gap-8">
                <hr />
                <div className="grid gap-2 text-sky-600 text-xs sm:text-sm lg:text-base">
                  <p className="flex gap-3 items-center">
                    <IconCalendarEvent className="inline-block w-4 md:w-4.5 lg:w-5" />
                    <span className="text-slate-600">{event.date}</span>
                  </p>
                  <p className="flex gap-3 items-center">
                    <IconClock className="inline-block w-4 md:w-4.5 lg:w-5" />
                    <span className="text-slate-600">{event.time}</span>
                  </p>
                  <p className="flex gap-3 items-center">
                    <IconMapPin className="inline-block w-4 md:w-4.5 lg:w-5" />
                    <span className="text-slate-600">{event.location}</span>
                  </p>
                  <p className="flex gap-3 items-center">
                    <IconUsers className="inline-block w-4 md:w-4.5 lg:w-5" />
                    <span className="text-slate-600">
                      {event.attendees} attendees
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:gap-5 xl:gap-6">
                  <button className="text-sm lg:text-base flex items-center gap-2 justify-center bg-slate-100 text-slate-700 border border-slate-300 font-medium py-0.5 sm:py-1 md:py-1.5 px-5 rounded-lg hover:bg-slate-200 active:bg-slate-300 transition-colors">
                    {event.code}
                    <IconCopy className="inline-block w-4 lg:w-5" />
                  </button>
                  <button className="text-sm lg:text-base bg-sky-600 flex items-center justify-center gap-2 text-white font-medium py-0.5 sm:py-1 md:py-1.5 px-5 rounded-lg hover:bg-sky-700 active:bg-sky-800 transition-colors">
                    Open
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-slate-800 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-6 sm:py-8 md:py-6 w-full">
        <div className="flex flex-col md:flex-row gap-4 xs:gap-5 sm:gap-6 justify-between items-center">
          <div className="flex gap-3 items-center">
            <h1 className="font-serif font-semibold">
              <span className="text-sky-600 text-xl sm:text-2xl lg:text-3xl">
                Y
              </span>
              <span className="text-slate-300 text-lg sm:text-xl lg:text-2xl font-medium">
                meets
              </span>
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-slate-300 text-xs sm:text-sm lg:text-base">
              © {new Date().getFullYear()} Yale Computer Society
            </p>
            <button className="text-xs sm:text-sm lg:text-base bg-slate-700 flex items-center gap-2 text-white font-medium py-0.5 md:py-1 px-2.5 xs:px-3 sm:px-3.5 md:px-4 lg:px-4.5 xl:px-5 rounded-full hover:bg-slate-600 active:bg-slate-500 transition-colors">
              Join us
            </button>
          </div>
          <div className="flex gap-5 text-xs sm:text-sm">
            <a
              href=""
              className="text-slate-300 hover:text-slate-200 active:text-slate-100 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href=""
              className="text-slate-300 hover:text-slate-200 active:text-slate-100 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
