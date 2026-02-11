import { motion } from "framer-motion";
import { Globe, History, Target, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";

const timeline = [
  { year: "1931", event: "Founded by Ferdinand Porsche in Stuttgart, Germany" },
  { year: "1948", event: "First Porsche-branded car, the 356, is produced" },
  { year: "1963", event: "The iconic Porsche 911 is unveiled" },
  { year: "1996", event: "Introduction of the Boxster roadster" },
  { year: "2002", event: "Launch of the Cayenne, Porsche's first SUV" },
  { year: "2019", event: "Taycan, the first fully electric Porsche, debuts" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-primary font-medium uppercase tracking-widest mb-4">
              Our Story
            </p>
            <h1 className="section-title mb-6">
              About <span className="text-gradient-gold">Porsche</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From a small consulting firm to one of the world's most prestigious 
              automotive brands, discover the journey of Porsche.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <History className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold">Our History</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Porsche was founded in 1931 by Ferdinand Porsche in Stuttgart, Germany. 
                  Initially, the company offered motor vehicle development work and 
                  consulting, helping other manufacturers refine their designs.
                </p>
                <p>
                  Over the decades, Porsche evolved from a consulting firm into a 
                  legendary manufacturer of high-performance sports cars. The company 
                  became famous for producing iconic vehicles such as the Porsche 911, 
                  which remains one of the most recognizable cars in the world.
                </p>
                <p>
                  From the race tracks of Le Mans to the streets of every major city, 
                  Porsche has consistently demonstrated its commitment to engineering 
                  excellence and innovative design.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-card rounded-lg border border-border"
                >
                  <span className="text-primary font-display font-bold text-lg min-w-[60px]">
                    {item.year}
                  </span>
                  <p className="text-foreground">{item.event}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-background rounded-lg border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                Porsche's mission is to create exclusive sports cars that combine 
                performance, comfort, and efficiency. We strive to exceed expectations 
                in every vehicle we produce, delivering an unmatched driving experience 
                that ignites passion and creates lasting memories.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="p-8 bg-background rounded-lg border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                We aim to shape the future of mobility through innovation, 
                sustainability, and advanced engineering. By embracing electric 
                technology while preserving our racing DNA, we're committed to 
                leading the automotive industry into a new era of performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold">Global Presence</h2>
            </div>
            <p className="text-muted-foreground mb-12">
              Today, Porsche operates in numerous countries across Europe, Asia, 
              Africa, and the Americas, with a strong reputation for quality, 
              reliability, and performance. With over 85 countries served and 
              more than 38,000 employees worldwide, Porsche continues to bring 
              the thrill of driving to enthusiasts around the globe.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "85+", label: "Countries" },
                { value: "38K+", label: "Employees" },
                { value: "800+", label: "Dealerships" },
                { value: "90+", label: "Years of Excellence" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl font-display font-bold text-gradient-gold">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
