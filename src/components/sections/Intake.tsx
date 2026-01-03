"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { intakeOptions } from "@/lib/content";

type FormState = {
  name: string;
  business: string;
  email: string;
  industry: string;
  needs: string[];
  timeline: string;
  budget: string;
  links: string;
  notes: string;
};

const defaultState: FormState = {
  name: "",
  business: "",
  email: "",
  industry: "",
  needs: [],
  timeline: "",
  budget: "",
  links: "",
  notes: "",
};

export default function Intake() {
  const [state, setState] = useState<FormState>(defaultState);

  const formName = "westbuilt-intake";

  const encodedPayload = useMemo(() => {
    // Netlify captures form submissions automatically. This encoding helps for local testing / fallback.
    const params = new URLSearchParams();
    params.set("form-name", formName);
    Object.entries(state).forEach(([k, v]) => {
      if (Array.isArray(v)) params.set(k, v.join(", "));
      else params.set(k, v);
    });
    return params.toString();
  }, [state]);

  function toggleNeed(need: string) {
    setState((s) => {
      const has = s.needs.includes(need);
      return { ...s, needs: has ? s.needs.filter((n) => n !== need) : [...s.needs, need] };
    });
  }

  return (
    <section id="start" className="py-14 sm:py-20">
      <Container>
        <div className="rounded-[40px] border border-ink-900/10 bg-stonewash-50 p-6 shadow-soft sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <SectionHeading
              eyebrow="Get started"
              title="Tell us what you need"
              subtitle="Fill out the intake and we’ll follow up with next steps. No pressure. No obligation."
            />

            <Card className="p-6">
              <form
                name={formName}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/"
              >
                <input type="hidden" name="form-name" value={formName} />
                <p className="hidden">
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Name"
                      name="name"
                      value={state.name}
                      onChange={(v) => setState((s) => ({ ...s, name: v }))}
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={state.email}
                      onChange={(v) => setState((s) => ({ ...s, email: v }))}
                      required
                    />
                  </div>

                  <Field
                    label="Business / Project"
                    name="business"
                    value={state.business}
                    onChange={(v) => setState((s) => ({ ...s, business: v }))}
                    required
                  />

                  <Select
                    label="Industry"
                    name="industry"
                    value={state.industry}
                    onChange={(v) => setState((s) => ({ ...s, industry: v }))}
                    options={["", ...intakeOptions.industry]}
                    required
                  />

                  <div>
                    <div className="text-xs font-semibold text-ink-700">
                      What do you need?
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {intakeOptions.needs.map((n) => {
                        const active = state.needs.includes(n);
                        return (
                          <button
                            key={n}
                            type="button"
                            onClick={() => toggleNeed(n)}
                            className={
                              "rounded-full border px-3 py-1 text-xs font-semibold transition " +
                              (active
                                ? "border-accent-400 bg-accent-100 text-accent-900"
                                : "border-ink-900/10 bg-white text-ink-800 hover:bg-ink-900/5")
                            }
                            aria-pressed={active}
                          >
                            {n}
                          </button>
                        );
                      })}
                    </div>
                    <input type="hidden" name="needs" value={state.needs.join(", ")} />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Select
                      label="Timeline"
                      name="timeline"
                      value={state.timeline}
                      onChange={(v) => setState((s) => ({ ...s, timeline: v }))}
                      options={["", ...intakeOptions.timeline]}
                      required
                    />
                    <Select
                      label="Budget range"
                      name="budget"
                      value={state.budget}
                      onChange={(v) => setState((s) => ({ ...s, budget: v }))}
                      options={["", ...intakeOptions.budget]}
                      required
                    />
                  </div>

                  <Field
                    label="Links (website, Instagram, inspiration)"
                    name="links"
                    value={state.links}
                    onChange={(v) => setState((s) => ({ ...s, links: v }))}
                    placeholder="Paste any links that help."
                  />

                  <TextArea
                    label="Notes"
                    name="notes"
                    value={state.notes}
                    onChange={(v) => setState((s) => ({ ...s, notes: v }))}
                    placeholder="Anything else we should know?"
                  />

                  {/* Fallback payload for local testing / forms that need it */}
                  <input type="hidden" name="_payload" value={encodedPayload} />

                  <div className="pt-2">
  <button
    type="submit"
    className="inline-flex h-10 w-full items-center justify-center rounded-2xl bg-ink-900 px-4 text-sm font-medium text-stonewash-50 shadow-soft transition hover:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-accent-300/60"
  >
    Get started
  </button>
  <div className="mt-2 text-xs text-ink-600">We’ll reply by email with next steps.</div>
</div>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1">
      <span className="text-xs font-semibold text-ink-700">{label}</span>
      <input
        className="h-10 rounded-2xl border border-ink-900/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-accent-300/60"
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <label className="grid gap-1">
      <span className="text-xs font-semibold text-ink-700">{label}</span>
      <select
        className="h-10 rounded-2xl border border-ink-900/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-accent-300/60"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      >
        {options.map((o) => (
          <option key={o || "empty"} value={o}>
            {o || "Select…"}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1">
      <span className="text-xs font-semibold text-ink-700">{label}</span>
      <textarea
        className="min-h-[96px] rounded-2xl border border-ink-900/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent-300/60"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}
