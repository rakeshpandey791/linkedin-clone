import React from "react";

interface IActionBtn {
  onRestart: () => void;
  onRedo: () => void;
  onUndo: () => void;
}

const ActionBtn: React.FC<IActionBtn> = ({ onRestart, onRedo, onUndo }) => {
  return (
    <div className="flex mt-5 justify-center">
      <button
        type="button"
        className="p-2 bg-green-500 mr-5 text-white rounded-sm"
        onClick={(e) => {
          e.stopPropagation();
          onRedo();
        }}
      >
        Redo
      </button>
      <button
        type="button"
        className="p-2 bg-green-500 mr-5 text-white rounded-sm"
        onClick={(e) => {
          e.stopPropagation();
          onUndo();
        }}
      >
        Undo
      </button>
      <button
        type="button"
        className="p-2 bg-green-500 mr-5 text-white rounded-sm"
        onClick={(e) => {
          e.stopPropagation();
          onRestart();
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default ActionBtn;
