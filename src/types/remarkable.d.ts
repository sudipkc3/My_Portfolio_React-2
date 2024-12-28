declare module 'remarkable' {
  export class Remarkable {
    constructor(options?: { html: boolean });
    render(content: string): string;
    renderer: {
      rules: {
        // Remove the type definition for the custom renderer rule for links
        // link_open: (tokens: any, idx: any) => string;
      };
    };
  }
}
