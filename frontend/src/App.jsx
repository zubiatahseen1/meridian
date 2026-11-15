import { Button, Card, CardBody, CardHeader } from "@heroui/react";

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-semibold text-slate-800">Meridian</h1>
          <p className="text-small text-default-500">
            Operations platform for agencies
          </p>
        </CardHeader>
        <CardBody className="flex flex-row gap-2">
          <Button color="primary">Primary</Button>
          <Button variant="bordered">Bordered</Button>
        </CardBody>
      </Card>
    </main>
  );
}
