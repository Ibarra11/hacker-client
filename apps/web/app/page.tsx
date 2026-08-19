import { Button } from "@repo/ui/button";

import { Link } from "@repo/ui/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-neutral-50">
      <Link variant="primary">Primary</Link>
      <Button disabled variant="primary">
        Primary
      </Button>
      <Button disabled variant="secondary">
        Secondary
      </Button>
    </div>
  );
}
