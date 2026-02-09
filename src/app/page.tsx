'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Turn Your Time Into <span className="text-primary">Money</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Complete simple tasks and get paid instantly. Or post tasks and
                get them done by thousands of workers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/auth/register?role=worker">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                  Start Earning
                </Button>
              </Link>
              <Link href="/auth/register?role=buyer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg px-8"
                >
                  Post a Task
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features / How it works */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Simple steps to get started with MicroEarn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<CheckCircle2 className="h-10 w-10 text-primary" />}
              title="1. Register"
              description="Sign up for free. Choose to be a Worker to earn or a Buyer to post tasks."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-10 w-10 text-primary" />}
              title="2. Verify & Work"
              description="Complete simple micro-tasks like surveys, app installs, or data entry."
            />
            <FeatureCard
              icon={<DollarSign className="h-10 w-10 text-primary" />}
              title="3. Get Paid"
              description="Withdraw your earnings securely via Stripe or other local payment methods."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
    >
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-secondary p-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
