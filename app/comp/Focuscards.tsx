import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardss() {
  const cards = [
    {
      title: "AI/ML",
      src: "/aiml.png",
    },
    {
      title: "DevsecOps",
      src: "/devsec.png",
    },
    {
      title: "AR/VR & Web Development",
      src: "/arvr.png",
    },
    {
      title: "Camping is for pros",
      src: "/arvr.png",
    },
    {
      title: "The road not taken",
      src: "/aiml.png",
    },
    {
      title: "The First Rule",
      src: "/arvr.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
