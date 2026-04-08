import { Calendar, Clock, Monitor, Users, CalendarDays } from "lucide-react";

export function UpcomingClasses() {
  const classes = [
    {
      level: "A1",
      format: "Fully online class",
      status: "Final Schedule",
      startDate: "April 20, 2026",
      time: "2:30PM - 7:00PM",
      days: "Mondays to Fridays",
      duration: "6 weeks or 1.5 Months",
    },
    {
      level: "A2",
      format: "Hybrid Class",
      status: "Tentative Schedule",
      startDate: "May 11, 2026",
      time: "1:00PM - 5:30PM",
      days: "Mondays to Fridays",
      duration: "6 Weeks or 1.5 Months",
    },
    {
      level: "B1",
      format: "Hybrid Class",
      status: "Final Schedule",
      startDate: "April 27, 2026",
      time: "6:00PM - 10:30PM",
      days: "Mondays to Fridays",
      duration: "10 Weeks or 2.5 Months",
    },
    {
      level: "B2",
      format: "Hybrid Class",
      status: "Tentative Schedule",
      startDate: "June 30, 2026",
      time: "6:30PM - 11:00PM",
      days: "Mondays to Fridays",
      duration: "10 weeks or 2.5 Months",
    }
  ];

  return (
    <section id="schedules" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Upcoming Classes
          </h2>
          <p className="text-gray-600 text-lg">
            Secure your spot in our upcoming batches. Early bird promos are available for early enrollees!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((cls, idx) => (
            <div key={idx} className="bg-brand-gray rounded-3xl p-6 border border-gray-100 flex flex-col relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl font-bold text-brand-black shadow-sm">
                  {cls.level}
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${cls.status === 'Final Schedule' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                  {cls.status}
                </span>
              </div>

              <div className="space-y-5 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <Calendar className="text-brand-red shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Start Date</p>
                    <p className="font-semibold text-brand-black">{cls.startDate}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="text-brand-red shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Time</p>
                    <p className="font-semibold text-brand-black">{cls.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CalendarDays className="text-brand-red shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Schedule</p>
                    <p className="font-semibold text-brand-black">{cls.days}</p>
                    <p className="text-sm text-gray-600">{cls.duration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  {cls.format.toLowerCase().includes('online') ? (
                    <Monitor className="text-brand-red shrink-0 mt-0.5" size={18} />
                  ) : (
                    <Users className="text-brand-red shrink-0 mt-0.5" size={18} />
                  )}
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Format</p>
                    <p className="font-semibold text-brand-black">{cls.format}</p>
                  </div>
                </div>
              </div>

              <a
                href="#enroll"
                className="w-full text-center py-3 rounded-xl font-semibold bg-white text-brand-black border border-gray-200 hover:border-brand-red hover:text-brand-red transition-colors mt-auto"
              >
                Reserve Slot
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
