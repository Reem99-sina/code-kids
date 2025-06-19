

interface LevelOneProps {
  onComplete: () => void;
  goHome: () => void;
  open: boolean;
  hint: string;
  source?: string;
}

export const LevelNine: React.FC<LevelOneProps> = () => {

  return (
    <p className="bg-white  justify-center text-9xl">
     Level Nine!!!!!!!!!!!!
    </p>
  );
};
