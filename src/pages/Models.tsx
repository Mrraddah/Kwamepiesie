import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

import porsche911 from "@/assets/porsche-911.avif";
import porscheCayenne from "@/assets/porsche-cayenne.jpg";
import porschePanamera from "@/assets/porsche-panamera.jpg";
import porscheTaycan from "@/assets/porsche-taycan.jpg";

const models = [
  {
    name: "911 Carrera",
    category: "Sports Car",
    description:
      "The iconic 911 continues to define the sports car segment with its unmistakable silhouette, rear-engine layout, and exhilarating performance.",
    specs: {
      power: "379 hp",
      acceleration: "0-60 in 4.0s",
      topSpeed: "182 mph",
    },
    image: porsche911,
  },
  {
    name: "Cayenne",
    category: "Luxury SUV",
    description:
      "The Cayenne combines Porsche's legendary performance with the versatility and comfort of a luxury SUV, perfect for any adventure.",
    specs: {
      power: "335 hp",
      acceleration: "0-60 in 5.9s",
      topSpeed: "152 mph",
    },
    image: porscheCayenne,
  },
  {
    name: "Panamera",
    category: "Luxury Sedan",
    description:
      "Experience the perfect fusion of sports car performance and luxury sedan comfort in the elegant Panamera.",
    specs: {
      power: "325 hp",
      acceleration: "0-60 in 5.3s",
      topSpeed: "164 mph",
    },
    image: porschePanamera,
  },
  {
    name: "Taycan",
    category: "Electric Sports Car",
    description:
      "The Taycan represents the future of Porsche - an all-electric sports car that delivers thrilling performance with zero emissions.",
    specs: {
      power: "402 hp",
      acceleration: "0-60 in 5.1s",
      topSpeed: "143 mph",
    },
    image: porscheTaycan,
  },
];

const Models = () => {
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
              Our Lineup
            </p>
            <h1 className="section-title mb-6">
              <span className="text-gradient-gold">Porsche</span> Models
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our diverse range of vehicles, from classic sports cars to 
              luxury SUVs and cutting-edge electric vehicles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {models.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  className={`relative overflow-hidden rounded-lg ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {model.category}
                  </span>
                  <h2 className="text-4xl font-display font-bold mt-2 mb-4">
                    {model.name}
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {model.description}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div>
                      <p className="text-2xl font-display font-bold text-gradient-gold">
                        {model.specs.power}
                      </p>
                      <p className="text-sm text-muted-foreground">Power</p>
                    </div>
                    <div>
                      <p className="text-2xl font-display font-bold text-gradient-gold">
                        {model.specs.acceleration}
                      </p>
                      <p className="text-sm text-muted-foreground">0-60 mph</p>
                    </div>
                    <div>
                      <p className="text-2xl font-display font-bold text-gradient-gold">
                        {model.specs.topSpeed}
                      </p>
                      <p className="text-sm text-muted-foreground">Top Speed</p>
                    </div>
                  </div>

                  <Button className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Find Your Perfect <span className="text-gradient-gold">Porsche</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Contact us today to schedule a test drive and experience the 
              thrill of driving a Porsche.
            </p>
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity">
              <Link to="/contact">
                Schedule Test Drive
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Models;
