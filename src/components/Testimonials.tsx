import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Moyin Kudoro",
      text: "When i was looking for a good training center, i accidentally stumbled upon Hello Deutsch Cebu and i can gladly say that i was quite impressed. They really are determined to help every student of theirs achieve their goal. They put in extra time and effort to make sure we are good to go. Herr Juri is a impeccably talented teacher, with patience and wisdom through his year of experience, he applies different methods of teacher for every students to help what works for them and what areas they are weak at. He really encouraged me to continue this journey and to achieve my goal, that i am grateful for. So if you are considering this training center i advice you to really go for it.",
    },
    {
      name: "Bianca",
      text: "It is the best combination of time spent and quality of learning. And the main thing is that Sir Arvin is a great person and great teacher, who always inspires you, lifts your spirits, and leaves you with a positive feeling for the whole day!\n\nThank you Hello Deutsch👌",
    },
    {
      name: "Dandee Sucgang",
      text: "I'm currently enrolled in this German language training center, and my experience so far has been very positive. My instructor, Herr Juri, is a native speaker who he is knowledgeable, patient and explains the lessons clearly, making even complex grammar easy to understand. The classes have a good balance of speaking, listening, reading, and writing. I highly recommend this to anyone looking to learn or improve their German.",
    },
    {
      name: "Jimkey",
      text: "I have a great experience in this deutch language center. Sir Juri is being nice, approachable and he really master his lesson to be impart to his student. Not also that he also shares his ideas and experiences and what is life on Germany.\n\nThis language center also provide books and materials for their student to note into either hardbound/hardcopy or softcopy...\n\nI'll be greatful for this language center for helping me with my German dream. Vielen Dank 😊",
    },
    {
      name: "Angel CO",
      text: "very well equipped with books and learning materials. The lessons are interesting and well-structured, and the instructor is competent and very supportive. The learning environment is friendly and motivating, which makes studying German enjoyable.",
    },
    {
      name: "Anj Supremo",
      text: "Had a great experience here. This is the best choice if you would like to learn the German language!",
    },
    {
      name: "Anne Miralles",
      text: "Competent and supportive instructor. Highly recommended!!",
    },
    {
      name: "Daniela",
      text: "",
    },
    {
      name: "Karlo",
      text: "",
    },
    {
      name: "Pj",
      text: "",
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-lg">
            Rated 5 Stars on Google and Facebook by our amazing students. Read about their experiences learning German with us.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-brand-gold fill-brand-gold" size={18} />
                ))}
              </div>
              
              {testimonial.text && (
                <div className="mb-6 text-gray-700 leading-relaxed whitespace-pre-line">
                  "{testimonial.text}"
                </div>
              )}
              
              <div className="mt-auto flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-brand-black">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">Verified Student</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
