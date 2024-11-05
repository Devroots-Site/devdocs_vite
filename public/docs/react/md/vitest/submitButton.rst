SubmitButton 🧪
========================

Wenn man den Submitbutton mit Zod verwendet hat der eine richtige "**Power**"


Einbinden:

.. code-block:: react 

   const TestWrapper = ({ children }: { children: ReactNode }) => {
   const methods = useForm({
      resolver: zodResolver(legalProtectionSchema), // Using Zod resolver for schema validation
      mode: 'onBlur',
      defaultValues: {
         generalContractProtection: '',
         motorVehicleProtection: '',
         privatLegalExpensesInsurance: '',
         deductible: '',
      },
   });

   const onHandleSubmit = (data: unknown) => {
      try {
         console.log('data :>> ', data); // Log form data on successful submission
      } catch (error) {
         console.error('Error handling submit:', error); // Log error if submission fails
      }
   };

   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      void methods.handleSubmit(onHandleSubmit)();
   };

   return (
      <FormProvider {...methods}>
         <form onSubmit={onSubmit} noValidate>
         {children}
         <button name="submit" type="submit">
            Submit
         </button>
         </form>
      </FormProvider>
   );
   };

Wenn der Submit so button eingebunden wird kann dieser auch beim testen Verwendet werden 

Was ist nun die Power dahinter ? 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Nun wenn man mit den **UserEvent** den **Submit** button drückt erscheinen die Fehlermeldungen ohne Lang hin und her clicken sowie Taben etc. 