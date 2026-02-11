import { motion } from "framer-motion";
import { Battery, Cpu, Gauge, Shield, Zap, Leaf } from "lucide-react";
import Layout from "@/components/layout/Layout";
import porscheEngine from "@/assets/porsche-engine.jpg";
import porscheElectric from "@/assets/porsche-electric.jpg";

const technologies = [
  {
    icon: Gauge,
    title: "Twin-Turbo Engines",
    description:
      "Our turbocharged flat-six engines deliver exceptional power and efficiency, with instant throttle response and a distinctive Porsche soundtrack.",
  },
  {
    icon: Battery,
    title: "Electric Powertrain",
    description:
      "The Taycan's 800-volt architecture enables rapid charging and consistent performance, setting new standards for electric mobility.",
  },
  {
    icon: Cpu,
    title: "Adaptive Suspension",
    description:
      "Porsche Active Suspension Management (PASM) continuously adjusts damping force, balancing comfort and handling.",
  },
  {
    icon: Shield,
    title: "Safety Systems",
    description:
      "Advanced driver assistance systems including adaptive cruise control, lane keeping assist, and automatic emergency braking.",
  },
  {
    icon: Zap,
    title: "Hybrid Technology",
    description:
      "E-Hybrid models combine combustion engines with electric motors for enhanced performance and improved efficiency.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Commitment to carbon-neutral production and the development of eFuels for sustainable high-performance driving.",
  },
];

const Technology = () => {
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
              Engineering Excellence
            </p>
            <h1 className="section-title mb-6">
              <span className="text-gradient-gold">Technology</span> & Innovation
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover the advanced technologies that make every Porsche a 
              masterpiece of engineering and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engine Feature */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The Heart of <span className="text-gradient-gold">Performance</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Porsche integrates advanced automotive technologies that push 
                  the boundaries of what's possible. From our legendary flat-six 
                  engines to cutting-edge electric drivetrains, every powertrain 
                  is designed to deliver an exhilarating driving experience.
                </p>
                <p>
                  Our engineers combine decades of racing experience with the 
                  latest advancements in materials science, aerodynamics, and 
                  software to create vehicles that are both thrilling to drive 
                  and efficient in operation.
                </p>
                <p>
                  Whether it's the instant torque of the Taycan or the visceral 
                  soundtrack of a naturally aspirated 911 GT3, Porsche technology 
                  is designed to connect driver and machine in perfect harmony.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-lg"
            >
              <img
                src={porscheEngine}
                alt="Porsche Engine"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>
          </div>

          {/* Electric Technology Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-lg lg:order-1"
            >
              <img
                src={porscheElectric}
                alt="Porsche Taycan Electric Powertrain"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The Future of <span className="text-gradient-gold">Electric</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Taycan represents Porsche's vision for electric mobility. 
                  With its revolutionary 800-volt architecture, it can charge from 
                  5% to 80% in just 22.5 minutes, making it the fastest-charging 
                  production electric vehicle.
                </p>
                <p>
                  Two permanent magnet synchronous motors deliver up to 750 horsepower 
                  in overboost mode, propelling the Taycan Turbo S from 0-60 mph in 
                  just 2.6 seconds—repeatedly, without performance degradation.
                </p>
                <p>
                  This groundbreaking technology showcases Porsche's commitment to 
                  sustainable performance, proving that electric vehicles can deliver 
                  the driving excitement that defines the brand.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Advanced <span className="text-gradient-gold">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the innovations that define the Porsche driving experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-background p-8 rounded-lg border border-border card-hover"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <tech.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              By the <span className="text-gradient-gold">Numbers</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "30K+", label: "Racing Victories" },
                { value: "800V", label: "Charging Architecture" },
                { value: "2.6s", label: "0-60 mph (Taycan Turbo S)" },
                { value: "205mph", label: "Top Speed (GT3 RS)" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-card rounded-lg border border-border"
                >
                  <p className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
