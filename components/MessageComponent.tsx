export interface MessageComponentProps {
    name: string; // Will be used for the sender's name
    backgroundColor: string; // A color property, can be used for styling
    darkbackgroundColor: string;
    content : string
  }
  
  export const MessageComponent: React.FC<MessageComponentProps> = ({ name, backgroundColor , darkbackgroundColor, content }) => {
    // Define a dynamic style for the background color
    return (
      <div className="max-h-[200px] flex items-start gap-2.5 mt-2">
        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt={`${name} image`} />
        <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 ${backgroundColor} rounded-e-xl rounded-es-xl dark:${darkbackgroundColor}`}>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{name}</span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{content}</p>
        </div>
      </div>
    );
  };

