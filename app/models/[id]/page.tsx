import ModelDetails from "@/components/ModelDetails"
import { models } from "@/components/data/models"

export default function ModelDetailsPage({ params }: { params: { id: string } }) {
  const model = models.find((m) => m.id === Number.parseInt(params.id))

  if (!model) {
    return <div>Model not found</div>
  }

  return <ModelDetails model={model} />
}

export async function generateStaticParams() {
  return models.map((model) => ({
    id: model.id.toString(),
  }))
}

