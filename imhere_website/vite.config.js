import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'auto-import-css',
      transform(code, id) {
        if (id.endsWith('.jsx')) {
          const cssPath = id.replace(/\.jsx$/, '.css');

          //Пример асинхронной проверки существования файла
          return new Promise((resolve) => {

            fs.access(cssPath, fs.constants.F_OK, (err) => {
              if (!err) {
                resolve(`import '${cssPath}';\n` + code);
              } else {
                console.warn(`CSS file not found: ${cssPath}`);
                resolve(code); // Продолжение работы даже если файла нет
              }
            });
          });
        }
        return code;
      },
    },
  ],
});
