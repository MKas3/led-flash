import { useController } from 'react-hook-form';

import { FormControl, useFormField } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';

const FormTabs = ({
  defaultValue,
  ...props
}: React.ComponentPropsWithoutRef<typeof Tabs>) => {
  const { name } = useFormField();
  const { field } = useController({
    name
  });
  useFormDefaultValue(defaultValue, field.value, field.onChange);

  return (
    <FormControl>
      <Tabs
        {...field}
        value={field.value ?? defaultValue}
        onValueChange={field.onChange}
        {...props}
      />
    </FormControl>
  );
};

const FormTabsList = TabsList;

const FormTabsTrigger = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsTrigger>) => {
  return (
    <FormControl>
      <TabsTrigger {...props} />
    </FormControl>
  );
};

const FormTabsContent = TabsContent;

export { FormTabs, FormTabsContent, FormTabsList, FormTabsTrigger };
