import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Introdu numele").max(100),
  phone: z.string().trim().min(7, "Număr invalid").max(20),
  service: z.string().trim().max(80).optional(),
  message: z.string().trim().min(5, "Spune-ne mai multe").max(1000),
});

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `Solicitare ${SITE.name}\nNume: ${parsed.data.name}\nTelefon: ${parsed.data.phone}\nServiciu: ${parsed.data.service ?? "-"}\nMesaj: ${parsed.data.message}`;
    window.open(`${SITE.whatsappHref}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Nume</Label>
        <Input id="name" name="name" required maxLength={100} placeholder="Ion Popescu" />
        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Telefon</Label>
        <Input id="phone" name="phone" type="tel" required maxLength={20} placeholder="07xx xxx xxx" />
        {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="service">Serviciu dorit</Label>
        <Input id="service" name="service" maxLength={80} defaultValue={defaultService} placeholder="ex: Montaj AC 12000 BTU" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Mesaj</Label>
        <Textarea id="message" name="message" required maxLength={1000} rows={4} placeholder="Descrie pe scurt ce ai nevoie" />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>
      <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
        Trimite solicitarea
      </Button>
      {sent && (
        <p className="flex items-center gap-2 text-sm text-success">
          <CheckCircle2 className="h-4 w-4" /> Mulțumim! Te contactăm în cel mai scurt timp.
        </p>
      )}
    </form>
  );
}