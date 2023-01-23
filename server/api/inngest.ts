import { serve } from "inngest/nuxt";
import fns from "~~/inngest";
import { inngest } from "~~/inngest/client";

export default defineEventHandler(serve(inngest, fns));
