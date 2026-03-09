import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      company: 'TechStart Inc.',
      content: 'Alex delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise helped us launch ahead of schedule.',
      rating: 5,
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'DataFlow Solutions',
      content: 'Working with Alex was a pleasure. He transformed our complex requirements into an intuitive dashboard that our users love. Highly recommend!',
      rating: 5,
      avatar: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO, FinanceHub',
      company: 'FinanceHub',
      content: 'Alex\'s full-stack expertise was invaluable to our project. He handled everything from architecture to deployment with professionalism and skill.',
      rating: 5,
      avatar: 'ER',
    },
    {
      name: 'David Park',
      role: 'Startup Founder',
      company: 'AppVenture',
      content: 'Outstanding developer! Alex helped us build our MVP in record time. His code quality and communication skills are top-notch.',
      rating: 5,
      avatar: 'DP',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm">Testimonials</span>
          <h2 className="text-5xl mt-4">What Clients Say</h2>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Feedback from clients and colleagues I've worked with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border relative"
            >
              <Quote className="absolute top-8 right-8 text-primary/20" size={48} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-xl">{testimonial.name}</h4>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-secondary leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
