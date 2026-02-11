import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Gauge, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroPorsche from "@/assets/hero-porsche.jpg";

const features = [
  {
    icon: Gauge,
    title: "Performance",
    description: "Legendary engineering delivering unmatched driving dynamics and acceleration.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nine decades of automotive innovation and racing heritage.",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Precision craftsmanship and attention to detail in every vehicle.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroPorsche}
            alt="Porsche 911"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium uppercase tracking-widest mb-4"
            >
              Since 1931
            </motion.p>
            <h1 className="section-title text-foreground mb-6">
              Innovation.{" "}
              <span className="text-gradient-gold">Performance.</span>{" "}
              Excellence.
            </h1>
            <p className="section-subtitle mb-8">
              Porsche is a world-renowned German automobile manufacturer known for 
              high-performance sports cars, luxury vehicles, and cutting-edge 
              automotive technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity">
                <Link to="/models">
                  Explore Models
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              The <span className="text-gradient-gold">Porsche</span> Difference
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every Porsche combines decades of racing heritage with innovative 
              technology to deliver an unparalleled driving experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card p-8 rounded-lg border border-border card-hover"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Experience <span className="text-gradient-gold">Excellence?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Discover our complete lineup of legendary sports cars, luxury sedans, 
              and electric vehicles.
            </p>
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
